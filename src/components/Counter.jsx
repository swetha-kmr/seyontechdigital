export default function Counter({ end, suffix = "" }) {
  return (
    <span>
      {end}
      {suffix}
    </span>
  );
}