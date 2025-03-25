"use client"

import * as React from "react"
import { ChevronDown, ChevronUp, ChevronsUpDown, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

interface DataTableColumn<T> {
  header: string
  accessor: keyof T | ((row: T) => React.ReactNode)
  sortable?: boolean
  className?: string
}

interface DataTableProps<T> {
  data: T[]
  columns: DataTableColumn<T>[]
  className?: string
  onRowClick?: (row: T) => void
}

export function DataTable<T>({ data, columns, className, onRowClick }: DataTableProps<T>) {
  const [sortColumn, setSortColumn] = React.useState<keyof T | null>(null)
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc")
  const [searchTerm, setSearchTerm] = React.useState("")
  const [filteredData, setFilteredData] = React.useState<T[]>(data)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Handle sorting
  const handleSort = (column: keyof T) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  // Filter and sort data
  React.useEffect(() => {
    let result = [...data]

    // Filter
    if (searchTerm) {
      result = result.filter((row) =>
        Object.values(row).some((value) => String(value).toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    // Sort
    if (sortColumn) {
      result.sort((a, b) => {
        const aValue = a[sortColumn]
        const bValue = b[sortColumn]

        if (aValue === bValue) return 0

        const comparison = aValue < bValue ? -1 : 1
        return sortDirection === "asc" ? comparison : -comparison
      })
    }

    setFilteredData(result)
  }, [data, searchTerm, sortColumn, sortDirection])

  // Render cell content
  const renderCell = (row: T, column: DataTableColumn<T>) => {
    if (typeof column.accessor === "function") {
      return column.accessor(row)
    }
    return row[column.accessor]
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-4 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-sm"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-slate-800/70 text-left">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={cn(
                    "p-2 sm:p-3 text-xs sm:text-sm font-medium text-slate-300 border-b border-slate-700/50",
                    column.sortable && "cursor-pointer hover:bg-slate-700/50",
                    column.className,
                  )}
                  onClick={() => column.sortable && typeof column.accessor === "string" && handleSort(column.accessor)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.header}</span>
                    {column.sortable && typeof column.accessor === "string" && (
                      <span>
                        {sortColumn === column.accessor ? (
                          sortDirection === "asc" ? (
                            <ChevronUp size={14} />
                          ) : (
                            <ChevronDown size={14} />
                          )
                        ) : (
                          <ChevronsUpDown size={14} className="opacity-50" />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/30">
            {filteredData.length > 0 ? (
              filteredData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={cn(
                    "bg-slate-800/30 hover:bg-slate-800/70 transition-colors",
                    onRowClick && "cursor-pointer",
                  )}
                  onClick={() => onRowClick && onRowClick(row)}
                >
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className={cn("p-2 sm:p-3 text-xs sm:text-sm text-slate-300", column.className)}>
                      {renderCell(row, column)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="p-4 text-center text-slate-400 text-sm">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

