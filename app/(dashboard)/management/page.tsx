"use client";
import { ProfileModal } from "@/components/common/profile-modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const ManagePage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setShowModal(true)}>Profile</Button>
      <ProfileModal showModal={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default ManagePage;
