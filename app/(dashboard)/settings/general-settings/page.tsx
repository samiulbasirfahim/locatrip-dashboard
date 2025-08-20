"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Input from "@/components/common/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, EyeOff, Edit } from "lucide-react";
import PasswordInput from "@/components/common/input-password";
export default function EditProfile({ }: {}) {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
    const [newBookingNotifications, setNewBookingNotifications] = useState(true);
    const [callTransferAlerts, setCallTransferAlerts] = useState(true);

    const [profileData, setProfileData] = useState({
        fullName: "Pappu Roy",
        email: "pappyroy6393@gmail.com",
        number: "+88 01405366393",
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    return (
        <section className="w-full pb-8">
            <div className="p-6">
                <div className="w-full">
                    <div className="p-4">
                        <div className="w-full">
                            <div className="flex gap-4 justify-center items-center mb-8">
                                <div className="relative mb-4">
                                    <Avatar className="w-24 h-24 outline-primary outline-3">
                                        <AvatarImage
                                            src="https://github.com/evilrabbit.png"
                                            alt="Sumon"
                                        />
                                        <AvatarFallback className="text-xl">P</AvatarFallback>
                                    </Avatar>
                                    <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-2">
                                        <Edit className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold">Sumon</h2>
                                    <h3 className="text-lg text-muted-foreground font-semibold">
                                        Admin
                                    </h3>
                                </div>
                            </div>

                            <Tabs
                                defaultValue="edit-profile"
                                className="w-full items-center flex flex-col"
                            >
                                <TabsList className="grid w-1/2 mb-8 grid-cols-2">
                                    <TabsTrigger value="edit-profile">Edit Profile</TabsTrigger>
                                    <TabsTrigger value="change-password">
                                        Change Password
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent
                                    value="edit-profile"
                                    className="w-full space-y-6 max-w-2xl"
                                >
                                    <div className="text-center mb-8">
                                        <h3 className="text-xl font-semibold">Edit Your Profile</h3>
                                    </div>

                                    <div className="space-y-6">
                                        <Input
                                            label="Full Name"
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Enter your name"
                                        />
                                        <Input
                                            label="Email"
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    <Button className="w-full">Save & Change</Button>
                                </TabsContent>

                                <TabsContent
                                    value="change-password"
                                    className="w-full space-y-6 max-w-2xl"
                                >
                                    <div className="text-center mb-8">
                                        <h3 className="text-xl font-semibold">
                                            Edit Your Password
                                        </h3>
                                    </div>

                                    <div className="space-y-6">
                                        <PasswordInput
                                            label="Current Password"
                                            name="current-password"
                                            id="current-password"
                                        />

                                        <PasswordInput
                                            label="New Password"
                                            name="new-password"
                                            id="new-password"
                                        />

                                        <PasswordInput
                                            label="Confirm New Password"
                                            name="confirm-new-password"
                                            id="confirm-new-password"
                                        />
                                    </div>

                                    <Button className="w-full">Save & Change</Button>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
