"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";

export default function SectionBox({
  children,
  mt = 1,
  mb = 1,
  py = 0,
  animate = true,
  ...props
}) {
  const MotionBox = motion(Box);

  return (
    <MotionBox
      component="section"
      initial={animate ? { opacity: 0, y: 20 } : {}}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      sx={{
        mt,
        mb,
        py,
        width: "100%",
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </MotionBox>
  );
}
