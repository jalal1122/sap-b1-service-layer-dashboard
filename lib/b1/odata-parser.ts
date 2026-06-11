export function applyOData<T extends Record<string, any>>(
  data: T[],
  searchParams: URLSearchParams
): T[] | Partial<T>[] {
  let result = [...data];

  // 1. $filter
  const filterQuery = searchParams.get("$filter");
  if (filterQuery) {
    result = result.filter((item) => parseAndApplyFilter(item, filterQuery));
  }

  // 2. $orderby
  const orderByQuery = searchParams.get("$orderby");
  if (orderByQuery) {
    result.sort((a, b) => {
      // e.g., "DocNum desc, DocDate asc"
      const sorts = orderByQuery.split(",").map((s) => s.trim());
      for (const sort of sorts) {
        const [field, direction] = sort.split(/\s+/);
        const dir = direction?.toLowerCase() === "desc" ? -1 : 1;
        if (a[field] < b[field]) return -1 * dir;
        if (a[field] > b[field]) return 1 * dir;
      }
      return 0;
    });
  }

  // 3. $select
  const selectQuery = searchParams.get("$select");
  if (selectQuery) {
    const fields = selectQuery.split(",").map((s) => s.trim());
    return result.map((item) => {
      const selectedItem: Partial<T> = {};
      fields.forEach((f) => {
        if (f in item) {
          selectedItem[f as keyof T] = item[f as keyof T];
        }
      });
      return selectedItem;
    });
  }

  return result;
}

/**
 * Basic OData filter parser
 * Supports: eq, ne, gt, ge, lt, le, and, or
 * Example: "CardType eq 'C' and Balance gt 1000"
 */
function parseAndApplyFilter(item: Record<string, any>, filterStr: string): boolean {
  // Simple "and" / "or" splitting (does not support complex nested parentheses yet)
  if (filterStr.includes(" or ")) {
    const conditions = filterStr.split(" or ");
    return conditions.some((cond) => evaluateCondition(item, cond.trim()));
  }

  if (filterStr.includes(" and ")) {
    const conditions = filterStr.split(" and ");
    return conditions.every((cond) => evaluateCondition(item, cond.trim()));
  }

  return evaluateCondition(item, filterStr);
}

function evaluateCondition(item: Record<string, any>, condition: string): boolean {
  // Regex to match "Field Operator Value"
  const match = condition.match(/^(\w+)\s+(eq|ne|gt|ge|lt|le)\s+(.+)$/i);
  if (!match) return true; // fallback to true if malformed

  const [, field, op, valueRaw] = match;
  
  const itemValue = item[field];
  
  // Parse value
  let value: any = valueRaw;
  if (valueRaw.startsWith("'") && valueRaw.endsWith("'")) {
    value = valueRaw.slice(1, -1);
  } else if (!isNaN(Number(valueRaw))) {
    value = Number(valueRaw);
  } else if (valueRaw === "null") {
    value = null;
  }

  switch (op.toLowerCase()) {
    case "eq": return itemValue === value;
    case "ne": return itemValue !== value;
    case "gt": return itemValue > value;
    case "ge": return itemValue >= value;
    case "lt": return itemValue < value;
    case "le": return itemValue <= value;
    default: return true;
  }
}
