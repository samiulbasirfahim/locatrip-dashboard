"use client";
import PlanCard from "@/components/common/plan-card";
import PlanEditModal from "@/components/common/plan-edit-modal";
import { Button } from "@/components/ui/button";
import { H3 } from "@/components/ui/typography";
import { Crown, LucideIcon, MessagesSquare, Plus, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export type Plan = {
    id: string;
    name: string;
    price: number;
    trialDays: number;
    features: string[];
    icon: LucideIcon;
};

export default function Page() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
    const [plans, setPlans] = useState<Plan[]>([
        {
            id: "1",
            name: "Free Trial",
            price: 0,
            trialDays: 7,
            features: [
                "3 itinerary generations/month",
                "Ads included",
                "Basic support",
            ],
            icon: Zap,
        },
        {
            id: "2",
            name: "Basic",
            price: 50,
            trialDays: 7,
            features: [
                "20 AI itineraries/month",
                "Reduced ads",
                "Standard suggestions",
            ],
            icon: MessagesSquare,
        },

        {
            id: "4",
            name: "Premium+",
            price: 50,
            trialDays: 7,
            features: [
                "Unlimited AI itineraries",
                "No ads",
                "Exclusive travel insights",
                "Standard suggestions",
            ],
            icon: Crown,
        },

        {
            id: "6",
            name: "Premium",
            price: 50,
            trialDays: 7,
            features: [
                "Unlimited AI itineraries",
                "No ads",
                "Exclusive travel insights",
                "Standard suggestions",
            ],
            icon: Crown,
        },
    ]);

    return (
        <div className="space-y-8">
            <div className="flex justify-between">
                <H3>Subscription Plans</H3>
                <Button
                    className="flex items-center gap-2"
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    <Plus color="white" strokeWidth={3} />
                    Add Plan
                </Button>
            </div>

            <div className="grid gap-4 justify-center grid-cols-[repeat(auto-fit,minmax(350px,max-content))]">
                {plans.map((plan, i) => (
                    <PlanCard
                        key={i}
                        plan={plan}
                        onClickEdit={(id: string) => {
                            console.log("SHOWING MODAL");
                            setShowModal(true);
                            setSelectedPlan(plans.find((plan) => plan.id === id) ?? null);
                        }}
                    />
                ))}
            </div>
            <PlanEditModal
                isOpen={showModal}
                selectedPlan={selectedPlan}
                onClose={() => {
                    setShowModal(false);
                    setSelectedPlan(null);
                }}
                onUpdate={() => { }}
            />
        </div>
    );
}
