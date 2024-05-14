const App = () => {
  return (
    <div>
      <input typeof="text" className="text-input" placeholder="Type or Click" />
      <div className="hive">
        <svg className="hive-cell center" viewBox="0 0 120 104">
          <polygon
            className="cell-fill"
            points="0,52 30,0 90,0 120,52 90,104 30,104"
            strokeWidth="7.5"
          />
          <text className="cell-letter" x="50%" y="50%" dy="10.75%">
            A
          </text>
        </svg>
        <svg className="hive-cell outer" viewBox="0 0 120 104">
          <polygon
            className="cell-fill"
            points="0,52 30,0 90,0 120,52 90,104 30,104"
            strokeWidth="7.5"
          />
          <text className="cell-letter" x="50%" y="50%" dy="10.75%">
            B
          </text>
        </svg>
        <svg className="hive-cell center" viewBox="0 0 120 104">
          <polygon
            className="cell-fill"
            points="0,52 30,0 90,0 120,52 90,104 30,104"
            strokeWidth="7.5"
          />
          <text className="cell-letter" x="50%" y="50%" dy="10.75%">
            C
          </text>
        </svg>
        <svg className="hive-cell center" viewBox="0 0 120 104">
          <polygon
            className="cell-fill"
            points="0,52 30,0 90,0 120,52 90,104 30,104"
            strokeWidth="7.5"
          />
          <text className="cell-letter" x="50%" y="50%" dy="10.75%">
            D
          </text>
        </svg>
        <svg className="hive-cell center" viewBox="0 0 120 104">
          <polygon
            className="cell-fill"
            points="0,52 30,0 90,0 120,52 90,104 30,104"
            strokeWidth="7.5"
          />
          <text className="cell-letter" x="50%" y="50%" dy="10.75%">
            E
          </text>
        </svg>
        <svg className="hive-cell center" viewBox="0 0 120 104">
          <polygon
            className="cell-fill"
            points="0,52 30,0 90,0 120,52 90,104 30,104"
            strokeWidth="7.5"
          />
          <text className="cell-letter" x="50%" y="50%" dy="10.75%">
            F
          </text>
        </svg>
        <svg className="hive-cell center" viewBox="0 0 120 104">
          <polygon
            className="cell-fill"
            points="0,52 30,0 90,0 120,52 90,104 30,104"
            strokeWidth="7.5"
          />
          <text className="cell-letter" x="50%" y="50%" dy="10.75%">
            G
          </text>
        </svg>
      </div>
    </div>
  );
};

export default App;
