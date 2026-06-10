"use client";

import { useEffect, useState } from "react";

import ServerCard from "../components/ServerCard";
import TrafficVisualizer from "../components/TrafficVisualizer";
import SystemDiagram from "../components/SystemDiagram";
import AnalyticsCard from "../components/AnalyticsCard";

import { getServers } from "../services/serverService";
import { getAnalytics } from "../services/analyticsService";

import ThemeToggle
from "../components/ThemeToggle";

import {
  connectWebSocket,
  disconnectWebSocket
} from "../services/websocketService";

import { ServerNode } from "../types/ServerNode";
import { Analytics } from "../types/Analytics";
import ConnectionsChart
from "../charts/ConnectionsChart";

import AlgorithmSelector
from "../components/AlgorithmSelector";

import RequestTrendChart
from "../charts/RequestTrendChart";

import {
  changeAlgorithm
}
from "../services/loadBalancerService";

import ScalingControls
from "../components/ScalingControls";

import {
  addServer,
  removeServer
}
from "../services/scalingService";

import {
  startSimulation,
  stopSimulation
} from "../services/simulationService";

import AutoScaleCard
from "../components/AutoScaleCard";

export default function Home() {

  const [servers, setServers] =
    useState<ServerNode[]>([]);

  const [analytics, setAnalytics] =
    useState<Analytics | null>(null);

  const [trendData, setTrendData] =
useState<any[]>([]);

  const [darkMode, setDarkMode] =
useState(true);

  console.log("Analytics State:", analytics);

  useEffect(() => {

    loadData();

    connectWebSocket((data) => {

      setServers(data);

      loadAnalytics();
    });

    return () => {

      disconnectWebSocket();
    };

  }, []);

  const toggleTheme = () => {

  setDarkMode(!darkMode);
};

  const handleAlgorithmChange =
async (
  algorithm: string
) => {

  await changeAlgorithm(
    algorithm.toLowerCase()
  );

  await loadAnalytics();
};
  const loadServers = async () => {

    const data =
      await getServers();

    setServers(data);
  };
const handleAddServer =
async () => {

  await addServer();

  await loadData();
};

const handleRemoveServer =
async () => {

  await removeServer();

  await loadData();
};
const loadAnalytics = async () => {

  const analyticsData =
    await getAnalytics();

  console.log("Analytics Data:");
  console.log(analyticsData);

setAnalytics(analyticsData);

setTrendData((prev) => [

  ...prev,

  {
    time:
      new Date()
      .toLocaleTimeString(),

    requests:
      analyticsData.totalRequests,
  },

].slice(-10));
};

  const loadData = async () => {

    await loadServers();

    await loadAnalytics();
  };

  return (

<main
 className={
   darkMode
   ? "bg-slate-950 text-white min-h-screen p-8"
   : "bg-white text-black min-h-screen p-8"
 }
>

<div className="flex justify-between mb-6">

  <h1 className="text-4xl font-bold">
    Load Balancer Simulator
  </h1>

  <ThemeToggle
    darkMode={darkMode}
    toggle={toggleTheme}
  />

</div>

<div className="flex gap-4 mb-6">

  <button
    onClick={startSimulation}
    className="
      bg-green-600
      px-4
      py-2
      rounded
      text-white"
  >
    ▶ Start Traffic
  </button>

  <button
    onClick={stopSimulation}
    className="
      bg-red-600
      px-4
      py-2
      rounded
      text-white"
  >
    ⏹ Stop Traffic
  </button>

</div>

      {analytics && (

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-5
          gap-4
          mb-8"
        >

          <AnalyticsCard
            title="Total Requests"
            value={analytics.totalRequests}
          />

          <AnalyticsCard
            title="Active Servers"
            value={analytics.activeServers}
          />

          <AnalyticsCard
            title="Connections"
            value={analytics.totalConnections}
          />

          <AnalyticsCard
            title="Algorithm"
            value={analytics.currentAlgorithm}
          />

        </div>

      )}

      <TrafficVisualizer />

      <SystemDiagram />
      <ConnectionsChart
  servers={servers}
/>
<RequestTrendChart
  data={trendData}
/>
      <AlgorithmSelector

  currentAlgorithm={
    analytics?.currentAlgorithm
    || "ROUND_ROBIN"
  }

  onChange={
    handleAlgorithmChange
  }

/>

<ScalingControls

  onAdd={
    handleAddServer
  }

  onRemove={
    handleRemoveServer
  }

/>
<AutoScaleCard
  serverCount={
    analytics?.activeServers ?? 0
  }
/>
      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-4"
      >

        {servers.map((server) => (

          <ServerCard
            key={server.id}
            server={server}
          />

        ))}

      </div>

    </main>

  );
}