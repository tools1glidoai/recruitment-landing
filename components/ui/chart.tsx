"use client"

import type * as React from "react"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  type TooltipProps,
} from "recharts"
import { cn } from "@/lib/utils"

interface ChartProps {
  data: any[]
  type: "area" | "bar" | "line" | "pie"
  xKey?: string
  yKeys?: { key: string; name: string; color: string }[]
  height?: number
  className?: string
  title?: string
  subtitle?: string
}

export function Chart({
  data,
  type,
  xKey = "name",
  yKeys = [{ key: "value", name: "Value", color: "#8884d8" }],
  height = 300,
  className,
  title,
  subtitle,
}: ChartProps) {
  const renderChart = () => {
    switch (type) {
      case "area":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <AreaChart data={data} margin={{ top: 5, right: 5, left: -15, bottom: 5 }}>
              <defs>
                {yKeys.map((item) => (
                  <linearGradient key={item.key} id={`color-${item.key}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={item.color} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={item.color} stopOpacity={0.1} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey={xKey} stroke="#888" tick={{ fontSize: 10 }} />
              <YAxis stroke="#888" tick={{ fontSize: 10 }} />
              <Tooltip content={<ChartTooltip />} />
              <Legend content={<ChartLegend />} />
              {yKeys.map((item) => (
                <Area
                  key={item.key}
                  type="monotone"
                  dataKey={item.key}
                  name={item.name}
                  stroke={item.color}
                  fillOpacity={1}
                  fill={`url(#color-${item.key})`}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        )
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data} margin={{ top: 5, right: 5, left: -15, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey={xKey} stroke="#888" tick={{ fontSize: 10 }} />
              <YAxis stroke="#888" tick={{ fontSize: 10 }} />
              <Tooltip content={<ChartTooltip />} />
              <Legend content={<ChartLegend />} />
              {yKeys.map((item) => (
                <Bar key={item.key} dataKey={item.key} name={item.name} fill={item.color} radius={[4, 4, 0, 0]} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        )
      case "line":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data} margin={{ top: 5, right: 5, left: -15, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey={xKey} stroke="#888" tick={{ fontSize: 10 }} />
              <YAxis stroke="#888" tick={{ fontSize: 10 }} />
              <Tooltip content={<ChartTooltip />} />
              <Legend content={<ChartLegend />} />
              {yKeys.map((item) => (
                <Line
                  key={item.key}
                  type="monotone"
                  dataKey={item.key}
                  name={item.name}
                  stroke={item.color}
                  strokeWidth={2}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        )
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey={yKeys[0].key}
                nameKey={xKey}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={yKeys[index % yKeys.length]?.color || `hsl(${index * 45}, 70%, 60%)`}
                  />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltip />} />
              <Legend content={<ChartLegend />} />
            </PieChart>
          </ResponsiveContainer>
        )
      default:
        return null
    }
  }

  return (
    <ChartContainer className={className}>
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-lg font-medium text-white">{title}</h3>}
          {subtitle && <p className="text-sm text-slate-400">{subtitle}</p>}
        </div>
      )}
      {renderChart()}
    </ChartContainer>
  )
}

interface ChartTooltipProps extends TooltipProps<any, any> {}

const ChartTooltip = ({ active, payload, label }: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <ChartTooltipContent className="bg-slate-800 p-3 border border-slate-700 rounded-md shadow-lg">
        {label && <p className="text-slate-300 mb-1">{label}</p>}
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
            <p className="text-sm">
              <span className="text-slate-400">{entry.name}: </span>
              <span className="text-white font-medium">{entry.value}</span>
            </p>
          </div>
        ))}
      </ChartTooltipContent>
    )
  }
  return null
}

const ChartLegend = () => {
  return <ChartLegendContent />
}

const ChartContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("bg-slate-900/70 rounded-lg p-4 border border-slate-800/50", className)}>{children}</div>
}

const ChartTooltipContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>
}

const ChartLegendContent = () => {
  return <></>
}

const ChartStyle = () => {
  return <></>
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle }

