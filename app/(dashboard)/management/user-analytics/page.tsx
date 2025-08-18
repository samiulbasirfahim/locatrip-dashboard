import ChartUserGrowth from "@/components/common/chart-user-growth";
import { UserTable } from "@/components/common/user-table";
import { Button } from "@/components/ui/button";
import { H3 } from "@/components/ui/typography";
import { UserGrowthChartData } from "@/types/chart";
import { UserMiniType } from "@/types/user";
import Link from "next/link";

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

const users: UserMiniType[] = [
    {
        id: "1a2b3c4d",
        username: "alice_wonderland",
        status: "online",
        avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
        id: "2b3c4d5e",
        username: "bob_the_builder",
        status: "deactive",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        id: "3c4d5e6f",
        username: "charlie_adventurer",
        status: "busy",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: "4d5e6f7g",
        username: "david_mountain_climber",
        status: "away",
        avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
        id: "5e6f7g8h",
        username: "eve_cyber_guardian",
        status: "online",
        avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
        id: "6f7g8h9i",
        username: "frank_the_tank",
        status: "deactive",
        avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
        id: "7g8h9i0j",
        username: "grace_harmony_smith",
        status: "busy",
        avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
        id: "8h9i0j1k",
        username: "heidi_the_strategist",
        status: "away",
        avatar: "https://i.pravatar.cc/150?img=8",
    },
    {
        id: "9i0j1k2l",
        username: "ivan_master_coder",
        status: "online",
        avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
        id: "0j1k2l3m",
        username: "judy_the_juggler",
        status: "deactive",
        avatar: "https://i.pravatar.cc/150?img=10",
    },
];

export default function Page() {
    return (
        <div className="space-y-8">
            <div>
                <H3 className="mb-4">User Growth</H3>
                <ChartUserGrowth chartData={userGrowthData} />
            </div>
            <div>
                <div className="mb-4 flex items-center justify-between">
                    <H3>Recent User Aded</H3>
                    <Link href="/management/all-users">
                        <Button variant={"link"}>View All User</Button>
                    </Link>
                </div>
                <UserTable users={users} showPagination={false} />
            </div>
        </div>
    );
}
