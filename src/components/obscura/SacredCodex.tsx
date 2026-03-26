"use client";
import { motion } from "framer-motion";

const rules = [
  "All participants must carry a valid college identity card.",
  "No automated tools for flag submission are permitted.",
  "Each team may have no more than 3 members.",
  "Internet access for hints is strictly forbidden during the event.",
  "Flags must be submitted in the exact format: OBSCURA{...}",
  "Any participant caught cheating will be immediately disqualified.",
  "Organiser decisions are final and binding.",
  "Challenges may only be attempted through the designated platform.",
];

export default function SacredCodex() {
  return (
    <section id="rules" style={{
      padding: "8rem 2rem",
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      justifyContent: "center",
    }}>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        <h2 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          fontWeight: 800,
          color: "#e67e22", // Sacred orange from image
          letterSpacing: "0.05em",
          marginBottom: "1rem",
          textTransform: "capitalize"
        }}>
          The Sacred Codex
        </h2>
        <div style={{
          fontFamily: "var(--font-heading)",
          fontSize: "0.9rem",
          color: "rgba(230, 126, 34, 0.6)",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
        }}>
          Rules Inscribed By The High Council
        </div>
      </motion.div>

      {/* Rules Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.01, borderColor: "rgba(230, 126, 34, 0.2)" }}
        whileTap={{ scale: 0.99 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          maxWidth: "900px",
          width: "100%",
          background: "rgba(10, 5, 5, 0.4)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(230, 126, 34, 0.1)",
          borderRadius: "24px",
          padding: "3rem",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          cursor: "default"
        }}
      >
        {rules.map((rule, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              padding: "0.5rem 0",
            }}
          >
            <div style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "1px solid rgba(230, 126, 34, 0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.8rem",
              fontFamily: "var(--font-heading)",
              color: "#e67e22",
              flexShrink: 0,
            }}>
              {index + 1}
            </div>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.1rem",
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: 1.6,
              margin: 0,
            }}>
              {rule}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer link style from image (optional addition) */}
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{
              marginTop: "4rem",
              fontFamily: "var(--font-heading)",
              fontSize: "0.8rem",
              letterSpacing: "0.2em",
              color: "rgba(255, 255, 255, 0.3)",
              textTransform: "uppercase"
          }}
      >
          WiCyS Sathyabama
      </motion.div>
    </section>
  );
}
