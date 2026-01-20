import { colors } from "../../statics/color";

export function FlightSkeleton() {
  return (
    <div
      style={{
        background: colors.grayLight,
        borderRadius: 14,
        padding: 16,
        marginBottom: 16,
        animation: "pulse 1.5s infinite",
      }}
    >
      <div style={{ height: 20, width: "40%", background: "#ddd", borderRadius: 6 }} />
      <div style={{ height: 14, width: "60%", background: "#ddd", borderRadius: 6, marginTop: 12 }} />
      <div style={{ height: 14, width: "50%", background: "#ddd", borderRadius: 6, marginTop: 8 }} />
      <div style={{ height: 36, background: "#ccc", borderRadius: 10, marginTop: 16 }} />
    </div>
  );
}
