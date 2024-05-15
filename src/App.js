import { FaShuffle } from "react-icons/fa6";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">🐝 Spelling Bee</h1>
      <input typeof="text" className="text-input" placeholder="Type or Click" />
      <div className="hive-container">
        <div className="found-answers">
          <p className="found-answers-count">You've found 0 answers</p>
        </div>

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
      <div className="hive-actions">
        <button>Delete</button>
        <button>
          <FaShuffle />
        </button>
        <button>Enter</button>
      </div>
    </div>
  );
};

export default App;
