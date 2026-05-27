import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");

  const [donations, setDonations] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("donations")) || [
        { name: "Alice", amount: 120 },
        { name: "Bob", amount: 80 },
        { name: "Charlie", amount: 200 },
      ]
    );
  });

  const [total, setTotal] = useState(() => {
    const savedTotal = localStorage.getItem("total");

    return savedTotal !== null
      ? Number(savedTotal)
      : 950;
  });

  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState("");

  const handleWalletConnection = () => {
    setConnected(!connected);
  };

  const handleDonate = () => {
    if (!connected) {
      alert("Connect wallet first");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      alert("Enter a valid EGLD amount");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const newDonation = {
        name: "You",
        amount: Number(amount),
      };

      setDonations([newDonation, ...donations]);

      localStorage.setItem(
        "donations",
        JSON.stringify([newDonation, ...donations])
      );

      setTotal(total + Number(amount));

      localStorage.setItem(
        "total",
        total + Number(amount)
      );

      setLoading(false);

      setTxHash(
        "0x" +
          Math.random().toString(16).substring(2, 14)
      );

      alert(`Transaction confirmed: ${amount} EGLD donated`);

      setAmount("");
    }, 2000);
  };

  const handleWithdraw = () => {
    setTotal(0);

    setDonations([]);

    localStorage.setItem("total", 0);

    localStorage.setItem(
      "donations",
      JSON.stringify([])
    );

    alert("Funds withdrawn successfully");
  };

  const progress = Math.min((total / 1000) * 100, 100);

  const funded = total >= 1000;

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a, #1e293b)",
        padding: "60px",
        width: "100vw",
        boxSizing: "border-box",
        fontFamily: "Arial",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "52px",
              }}
            >
              Crowdfunding dApp
            </h1>

            <p
              style={{
                color: "#94a3b8",
                marginTop: "8px",
              }}
            >
              Decentralized fundraising platform powered by
              MultiversX.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              style={{
                color: connected ? "#22c55e" : "#ef4444",
                fontWeight: "bold",
              }}
            >
              {connected
                ? "● Wallet Connected"
                : "● Wallet Disconnected"}
            </div>

            <button
              onClick={handleWalletConnection}
              style={{
                padding: "12px 18px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: connected
                  ? "#dc2626"
                  : "#2563eb",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {connected
                ? "Disconnect"
                : "Connect Wallet"}
            </button>

            <button
              onClick={handleWithdraw}
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "none",
                background:
                  "linear-gradient(90deg, #dc2626, #b91c1c)",
                color: "white",
                fontSize: "17px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "15px",
              }}
            >
              Withdraw Funds
            </button>

          </div>
        </div>

        {/* MAIN GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2.5fr 1fr",
            gap: "25px",
          }}
        >
          {/* LEFT SIDE */}
          <div
            style={{
              backgroundColor: "#111827",
              borderRadius: "20px",
              padding: "45px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                fontSize: "30px",
              }}
            >
              Build a School
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "26px",
              }}
            >
              Help us raise funds for building a new school
              for children in rural communities.
            </p>

            {/* STATS */}
            <div
              style={{
                marginTop: "35px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <span>Funding Progress</span>
                <span>{progress.toFixed(0)}%</span>
              </div>

              <div
                style={{
                  backgroundColor: "#374151",
                  borderRadius: "999px",
                  overflow: "hidden",
                  height: "14px",
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    background:
                      "linear-gradient(90deg, #22c55e, #16a34a)",
                    height: "100%",
                    transition: "0.4s",
                  }}
                />
              </div>

              <h1
                style={{
                  color: "#22c55e",
                  fontSize: "56px",
                  marginBottom: "10px",
                }}
              >
                {total} EGLD
              </h1>

              <p
                style={{
                  color: "#94a3b8",
                }}
              >
                Target: 1000 EGLD
              </p>

              {funded && (
                <div
                  style={{
                    marginTop: "20px",
                    backgroundColor: "#14532d",
                    padding: "15px",
                    borderRadius: "12px",
                    color: "#86efac",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  🎉 Campaign Successfully Funded!
                </div>
              )}
            </div>

            {/* DONATE */}
            <div
              style={{
                marginTop: "35px",
              }}
            >
              <input
                type="number"
                placeholder="Enter EGLD amount"
                value={amount}
                onChange={(e) =>
                  setAmount(e.target.value)
                }
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid #374151",
                  backgroundColor: "#1f2937",
                  color: "white",
                  marginBottom: "20px",
                  boxSizing: "border-box",
                  fontSize: "16px",
                }}
              />

              <button
                onClick={handleDonate}
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "none",
                  background:
                    "linear-gradient(90deg, #2563eb, #1d4ed8)",
                  color: "white",
                  fontSize: "17px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {loading
                  ? "Processing Transaction..."
                  : "Donate EGLD"}
              </button>
            </div>

            {/* TX HASH */}
            {txHash && (
              <div
                style={{
                  marginTop: "25px",
                  backgroundColor: "#1f2937",
                  padding: "18px",
                  borderRadius: "14px",
                  border: "1px solid #374151",
                }}
              >
                <h3
                  style={{
                    marginTop: 0,
                    color: "#22c55e",
                  }}
                >
                  Transaction Confirmed
                </h3>

                <p
                  style={{
                    wordBreak: "break-all",
                    color: "#d1d5db",
                    fontSize: "14px",
                  }}
                >
                  Hash: {txHash}
                </p>

                <p
                  style={{
                    color: "#94a3b8",
                    marginBottom: 0,
                  }}
                >
                  Network: MultiversX Devnet
                </p>
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div
            style={{
              backgroundColor: "#111827",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              height: "fit-content",
            }}
          >
            <h2
              style={{
                marginTop: 0,
              }}
            >
              Recent Donations
            </h2>

            {donations.map((donation, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#1f2937",
                  padding: "14px",
                  borderRadius: "12px",
                  marginBottom: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {donation.name}
                  </div>

                  <div
                    style={{
                      color: "#94a3b8",
                      fontSize: "13px",
                    }}
                  >
                    Devnet User
                  </div>
                </div>

                <div
                  style={{
                    color: "#22c55e",
                    fontWeight: "bold",
                  }}
                >
                  +{donation.amount} EGLD
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;