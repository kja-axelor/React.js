import {
  ResponsiveContainer,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";
import { rawData } from "./Data";
function App() {
  const data = rawData;
  return (
    <>
      <h1 className="chart-heading">Line chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={data}>
          <CartesianGrid />
          <XAxis
            dataKey="name"
            interval={"preserveStartEnd"}
            tickFormatter={(value) => value + ` programming`}
          />
          <YAxis dataKey="student" strokeDasharray="3 3" />
          <Tooltip contentStyle={{ backgroundColor: "yellow" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="student"
            stroke="green"
            activeDot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="fees"
            stroke="red"
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <h1 className="chart-heading">Area chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="student"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>

      <h1 className="chart-heading">Bar chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="student" fill="#8884d8" />
          <Bar dataKey="fees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;
