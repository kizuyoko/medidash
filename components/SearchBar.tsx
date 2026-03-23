import Image from "next/image";
type Props = {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onChange(value);
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="space-x-2 border border-gray-400 rounded-lg flex flex-1 min-w-0 items-center px-3 py-1 group focus-within:border-blue-400 focus-within:bg-blue-50 transition-colors">
      <label htmlFor="search-input" className="sr-only">
        Search
      </label>
      <input
        id="search-input"
        type="text"
        placeholder="Search patients..."
        className="flex-1 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-0 w-auto"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Search patients"
        className="flex items-center hover:scale-110 transition-transform w-5 h-5 relative"
      >
        <Image
          src="/search.svg"
          alt=""
          width={20}
          height={20}
          className="absolute top-0 right-0 opacity-60"
        />
      </button>
    </form>
  );
};

export default SearchBar;