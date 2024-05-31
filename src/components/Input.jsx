export default function Input({ label, textarea, ...props }) {
  const classses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outlibe-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={classses} {...props} />
      ) : (
        <input className={classses} {...props} />
      )}
    </p>
  );
}
