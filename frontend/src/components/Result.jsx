function Result() {
    const insects = [
      { name: "Brownplant hopper", count: 17 },
      { name: "ladybug", count: 8 },
      { name: "grasshopper", count: 20 },
      { name: "caterpillar", count: 10 },
    ];
  
    return (
      <div className="max-w-screen-lg mx-auto mt-5 p-5">
        <h2 className="text-2xl font-bold mb-4">Insect Results</h2>
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Insect Name</th>
              <th className="border border-gray-300 p-2">Count</th>
              <th className="border border-gray-300 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {insects.map((insect, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{insect.name}</td>
                <td className="border border-gray-300 p-2">{insect.count}</td>
                <td className="border border-gray-300 p-2">
                  {insect.count > 15 ? "Harmful" : "Not Harmful"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Result;
  