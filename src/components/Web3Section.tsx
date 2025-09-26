import { motion } from "framer-motion";
import { Wallet, Coins, Shield, TrendingUp, Copy, Check } from "lucide-react";
import { useState } from "react";

const Web3Section = () => {
  const [copied, setCopied] = useState(false);
  const walletAddress = "0x742d35Cc66646B8B4f4e8E0b5E3A5a5A5A5A5A5A";

  const web3Stats = [
    {
      icon: Wallet,
      label: "Smart Contracts Deployed",
      value: "25+",
      color: "text-primary",
    },
    {
      icon: Coins,
      label: "DeFi Protocols Built",
      value: "8",
      color: "text-secondary",
    },
    {
      icon: Shield,
      label: "Security Audits",
      value: "12",
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      label: "Total Value Locked",
      value: "$2.5M+",
      color: "text-web3-green",
    },
  ];

  const nftCollection = [
    {
      id: 1,
      name: "Cosmic Dev #001",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=300&h=300&fit=crop",
      rarity: "Legendary",
    },
    {
      id: 2,
      name: "Code Wizard #042",
      image: "https://images.unsplash.com/photo-1635776062043-223faf322554?w=300&h=300&fit=crop",
      rarity: "Epic",
    },
    {
      id: 3,
      name: "Blockchain Genesis #007",
      image: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=300&h=300&fit=crop",
      rarity: "Rare",
    },
  ];

  const copyWalletAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="web3" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Web3
            </span>{" "}
            <span className="glow-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the decentralized future through blockchain development, 
            smart contracts, and innovative DeFi solutions.
          </p>
        </motion.div>

        {/* Web3 Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {web3Stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl text-center shadow-card hover:shadow-floating transition-all duration-300 group"
            >
              <div className={`inline-flex p-3 rounded-xl ${stat.color} bg-current/10 mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Wallet Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Wallet className="mr-3 text-primary" />
                My Wallet
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Ethereum Address
                  </label>
                  <div className="flex items-center space-x-2 p-4 bg-muted/20 rounded-xl border border-border/50">
                    <code className="flex-1 text-sm font-mono break-all">
                      {walletAddress}
                    </code>
                    <motion.button
                      onClick={copyWalletAddress}
                      className="p-2 hover:bg-muted/30 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {copied ? (
                        <Check size={16} className="text-secondary" />
                      ) : (
                        <Copy size={16} className="text-muted-foreground" />
                      )}
                    </motion.button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/20 rounded-xl border border-border/50">
                    <div className="text-sm text-muted-foreground mb-1">ETH Balance</div>
                    <div className="text-lg font-semibold">12.45 ETH</div>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl border border-border/50">
                    <div className="text-sm text-muted-foreground mb-1">Portfolio Value</div>
                    <div className="text-lg font-semibold text-secondary">$42,350</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blockchain Technologies */}
            <div className="glass p-8 rounded-2xl shadow-card">
              <h3 className="text-xl font-bold mb-6">Blockchain Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Ethereum", "Polygon", "Binance Smart Chain", "Solana", "Avalanche", "Arbitrum"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-3 bg-muted/20 rounded-xl border border-border/50 text-center text-sm hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* NFT Collection */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl shadow-card"
          >
            <h3 className="text-2xl font-bold mb-6">NFT Collection</h3>
            <div className="space-y-6">
              {nftCollection.map((nft, index) => (
                <motion.div
                  key={nft.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-muted/20 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={nft.image}
                      alt={nft.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-primary-foreground">
                        {nft.id}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {nft.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{nft.rarity}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.button
                className="w-full p-4 border-2 border-dashed border-border/50 rounded-xl text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Full Collection
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Web3Section;