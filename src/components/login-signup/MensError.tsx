import AlertIcon from "./AlertIcon";

export default function MensError({ err }: { err: string }) {
  return (
    <div className="flex gap-2 bg-red-100 rounded-lg p-4 text-sm text-red-700">
      <AlertIcon />
      <p className="">{err}</p>
    </div>
  );
}
