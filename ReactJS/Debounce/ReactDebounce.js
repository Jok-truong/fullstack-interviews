"use strict";

const fakeUsers = [
  {
    name: "Aegean Airlines",
    iataCode: "A3",
  },
  {
    name: "Aeroflot",
    iataCode: "SU",
  },
  {
    name: "Aerolineas Argentinas",
    iataCode: "AR",
  },
  {
    name: "Aeromexico",
    iataCode: "AM",
  },
  {
    name: "Air Algerie",
    iataCode: "AH",
  },
  {
    name: "Air Arabia",
    iataCode: "G9",
  },
  {
    name: "Air Canada",
    iataCode: "AC",
  },
  {
    name: "Air China",
    iataCode: "CA",
  },
  {
    name: "Air Europa",
    iataCode: "UX",
  },
  {
    name: "Air France-KLM",
    iataCode: "AF",
  },
  {
    name: "Air India",
    iataCode: "AI",
  },
  {
    name: "Air Mauritius",
    iataCode: "MK",
  },
  {
    name: "Air New Zealand",
    iataCode: "NZ",
  },
  {
    name: "Air Niugini",
    iataCode: "PX",
  },
  {
    name: "Air Tahiti",
    iataCode: "VT",
  },
  {
    name: "Air Tahiti Nui",
    iataCode: "TN",
  },
  {
    name: "Air Transat",
    iataCode: "TS",
  },
  {
    name: "AirAsia X",
    iataCode: "D7",
  },
  {
    name: "AirAsia",
    iataCode: "AK",
  },
  {
    name: "Aircalin",
    iataCode: "SB",
  },
  {
    name: "Alaska Airlines",
    iataCode: "AS",
  },
  {
    name: "Alitalia",
    iataCode: "AZ",
  },
  {
    name: "All Nippon Airways",
    iataCode: "NH",
  },
  {
    name: "Allegiant Air",
    iataCode: "G4",
  },
  {
    name: "American Airlines",
    iataCode: "AA",
  },
  {
    name: "Asiana Airlines",
    iataCode: "OZ",
  },
  {
    name: "Avianca",
    iataCode: "AV",
  },
  {
    name: "Azul Linhas Aereas Brasileiras",
    iataCode: "AD",
  },
  {
    name: "Azur Air",
    iataCode: "ZF",
  },
  {
    name: "Beijing Capital Airlines",
    iataCode: "JD",
  },
  {
    name: "Boliviana de Aviacion",
    iataCode: "OB",
  },
  {
    name: "British Airways",
    iataCode: "BA",
  },
  {
    name: "Cathay Pacific",
    iataCode: "CX",
  },
  {
    name: "Cebu Pacific Air",
    iataCode: "5J",
  },
  {
    name: "China Airlines",
    iataCode: "CI",
  },
  {
    name: "China Eastern Airlines",
    iataCode: "MU",
  },
  {
    name: "China Southern Airlines",
    iataCode: "CZ",
  },
  {
    name: "Condor",
    iataCode: "DE",
  },
  {
    name: "Copa Airlines",
    iataCode: "CM",
  },
  {
    name: "Delta Air Lines",
    iataCode: "DL",
  },
  {
    name: "Easyfly",
    iataCode: "VE",
  },
  {
    name: "EasyJet",
    iataCode: "U2",
  },
  {
    name: "EcoJet",
    iataCode: "8J",
  },
  {
    name: "Egyptair",
    iataCode: "MS",
  },
  {
    name: "El Al",
    iataCode: "LY",
  },
  {
    name: "Emirates Airlines",
    iataCode: "EK",
  },
  {
    name: "Ethiopian Airlines",
    iataCode: "ET",
  },
  {
    name: "Etihad Airways",
    iataCode: "EY",
  },
  {
    name: "EVA Air",
    iataCode: "BR",
  },
  {
    name: "Fiji Airways",
    iataCode: "FJ",
  },
  {
    name: "Finnair",
    iataCode: "AY",
  },
  {
    name: "Flybondi",
    iataCode: "FO",
  },
  {
    name: "Flydubai",
    iataCode: "FZ",
  },
  {
    name: "FlySafair",
    iataCode: "FA",
  },
  {
    name: "Frontier Airlines",
    iataCode: "F9",
  },
  {
    name: "Garuda Indonesia",
    iataCode: "GA",
  },
  {
    name: "Go First",
    iataCode: "G8",
  },
  {
    name: "Gol Linhas Aereas Inteligentes",
    iataCode: "G3",
  },
  {
    name: "Hainan Airlines",
    iataCode: "HU",
  },
  {
    name: "Hawaiian Airlines",
    iataCode: "HA",
  },
  {
    name: "IndiGo Airlines",
    iataCode: "6E",
  },
  {
    name: "Japan Airlines",
    iataCode: "JL",
  },
  {
    name: "Jeju Air",
    iataCode: "7C",
  },
  {
    name: "Jet2",
    iataCode: "LS",
  },
  {
    name: "JetBlue Airways",
    iataCode: "B6",
  },
  {
    name: "JetSMART",
    iataCode: "JA",
  },
  {
    name: "Juneyao Airlines",
    iataCode: "HO",
  },
  {
    name: "Kenya Airways",
    iataCode: "KQ",
  },
  {
    name: "Korean Air",
    iataCode: "KE",
  },
  {
    name: "Kulula.com",
    iataCode: "MN",
  },
  {
    name: "LATAM Airlines",
    iataCode: "LA",
  },
  {
    name: "Lion Air",
    iataCode: "JT",
  },
  {
    name: "LOT Polish Airlines",
    iataCode: "LO",
  },
  {
    name: "Lufthansa",
    iataCode: "LH",
  },
  {
    name: "Libyan Airlines",
    iataCode: "LN",
  },
  {
    name: "Linea Aerea Amaszonas",
    iataCode: "Z8",
  },
  {
    name: "Malaysia Airlines",
    iataCode: "MH",
  },
  {
    name: "Nordwind Airlines",
    iataCode: "N4",
  },
  {
    name: "Norwegian Air Shuttle",
    iataCode: "DY",
  },
  {
    name: "Oman Air",
    iataCode: "WY",
  },
  {
    name: "Pakistan International Airlines",
    iataCode: "PK",
  },
  {
    name: "Pegasus Airlines",
    iataCode: "PC",
  },
];

const useDebounce = (value, delay = 500) => {
  const [debounceValue, setDebounceValue] = React.useState(value);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debounceValue;
};

const fetchUsers = async (search) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return fakeUsers.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
};
function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search users..."
    />
  );
}

function Main() {
  const [users, setUsers] = React.useState(fakeUsers);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const debouncedSearch = useDebounce(search.trim());

  React.useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);

      const users = await fetchUsers(debouncedSearch);
      setUsers(users);
      setLoading(false);
    };
    loadUsers();
  }, [debouncedSearch]);

  return (
    <div className="flex flex-col px-4 py-2;">
      <SearchBar onSearch={setSearch} />
      {loading && <div>Loading...</div>}
      {!loading &&
        users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
