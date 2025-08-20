"use client";
import { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import Input from "@/components/common/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit } from "lucide-react";
import PasswordInput from "@/components/common/input-password";
export default function EditProfile() {
    const [profileData, setProfileData] = useState({
        fullName: "Pappu Roy",
        email: "pappyroy6393@gmail.com",
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    function handleProfileDataChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setProfileData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setPasswordData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    console.log(profileData);
    console.log(passwordData);

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
                                            id="fullName"
                                            name="fullName"
                                            placeholder="Enter your name"
                                            value={profileData.fullName}
                                            onChange={handleProfileDataChange}
                                        />
                                        <Input
                                            label="Email"
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={profileData.email}
                                            onChange={handleProfileDataChange}
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
                                            name="currentPassword"
                                            id="currentPassword"
                                            value={passwordData.currentPassword}
                                            onChange={handlePasswordChange}
                                        />

                                        <PasswordInput
                                            label="New Password"
                                            name="newPassword"
                                            id="newPassword"
                                            value={passwordData.newPassword}
                                            onChange={handlePasswordChange}
                                        />

                                        <PasswordInput
                                            label="Confirm New Password"
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            value={passwordData.confirmPassword}
                                            onChange={handlePasswordChange}
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
