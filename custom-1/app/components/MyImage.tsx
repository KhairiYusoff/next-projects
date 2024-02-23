import Image from "next/image";
import React from "react";

const MyImage = () => {
  return (
    <div>
      <Image
        href="/"
        src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height={200}
        width={100}
      />
    </div>
  );
};

export default MyImage;
