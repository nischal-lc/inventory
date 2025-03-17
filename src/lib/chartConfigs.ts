import { ChartConfig } from "@/components/ui/chart";

	
export const chartConfig = {
	value: {
		label: "Total Value ($)",
		color: "var(--chart-4)",
	},
} satisfies ChartConfig;

export const salesInvConfig = {
	sales: {
		label: "Sales Value",
		color: "var(--chart-1)",
	  },
	  inventory: {
		label: "Inventory Value",
		color: "var(--chart-2)",
	  },
}satisfies ChartConfig;