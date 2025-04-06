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

export const barChartConfig = {
	quantity: {
	  label: "Stock level",
	  color: "var(--chart-4)",
	},
  } satisfies ChartConfig


export const  pieChartConfig  = {
	quantity: {
	  label: "Distribution Percentage: ",
	},
	electronics: {
	  label: "Electronics",
	  color: "var(--chart-1)",
	},
	clothing: {
	  label: "Clothing",
	  color: "var(--chart-2)",
	},
	"home appliances": {
	  label: "Home Goods",	
	  color: "var(--chart-3)",
	},
	sports: {
	  label: "Sports",
	  color: "var(--chart-4)",
	},
	other: {
	  label: "Other",
	  color: "var(--chart-5)",
	},
  } satisfies ChartConfig