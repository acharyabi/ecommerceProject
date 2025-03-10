export default function PrimaryButton({ lable }: { lable: string }) {
  return (
    <button
      className="px-10 py-3 font-Fredoka  bg-primary rounded-full text-white"
      type="submit"
    >
      {lable}
    </button>
  );
}
