import { ChartRevenue } from "@/components/common/chart-revenue";
import ChartUserGrowth from "@/components/common/chart-user-growth";
import { StatCard } from "@/components/common/stat-card";
import { H3 } from "@/components/ui/typography";
import { RevenueChartData, UserGrowthChartData } from "@/types/chart";

const userGrowthData: UserGrowthChartData = [
    { month: "January", value: 23 },
    { month: "February", value: 45 },
    { month: "March", value: 56 },
    { month: "April", value: 34 },
    { month: "May", value: 67 },
    { month: "June", value: 78 },
    { month: "July", value: 89 },
    { month: "August", value: 54 },
    { month: "September", value: 61 },
    { month: "October", value: 72 },
    { month: "November", value: 80 },
];

const revenueData: RevenueChartData = [
    { month: "", revenue: 0 },
    { month: "January", revenue: 143 },
    { month: "February", revenue: 78 },
    { month: "March", revenue: 256 },
    { month: "April", revenue: 94 },
    { month: "May", revenue: 212 },
    { month: "Jun", revenue: 134 },
    { month: "July", revenue: 278 },
    { month: "August", revenue: 167 },
    { month: "September", revenue: 201 },
    { month: "November", revenue: 239 },
];

const HomePage = () => {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-4 gap-4">
                <StatCard
                    label="Total User"
                    isUp={true}
                    value="12,356"
                    subValue="+8.2%"
                    subText="from last month"
                />
                <StatCard
                    label="Total Revenue"
                    isUp={false}
                    value="$45,231"
                    subValue="-2.1%"
                    subText="from last month"
                />
                <StatCard
                    label="Destination"
                    isUp={true}
                    value="1,356"
                    subValue="+7.2%"
                    subText="from last month"
                />
                <StatCard
                    label="Total Events"
                    isUp={true}
                    value="100"
                    subValue="+2.2%"
                    subText="from last month"
                />
            </div>
            <div>
                <H3 className="mb-4">Revenue Analytics</H3>
                <ChartRevenue chartData={revenueData} />
            </div>

            <div>
                <H3 className="mb-4">User Growth</H3>
                <ChartUserGrowth chartData={userGrowthData} />
            </div>
        </div>
    );
};

export default HomePage;
