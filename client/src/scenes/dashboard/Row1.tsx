import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "../state/api";
import { useMemo } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  LineChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  BarChart,
  Bar,
  Rectangle,
} from "recharts";

import { useTheme } from "@mui/material";
import BoxHeader from "@/components/BoxHeader";

const Row1 = (props: Props) => {
  const { palette } = useTheme();
  const { data } = useGetKpisQuery();
  // console.group("data:", data);
  const revenue = useMemo(() => {
    return (
      data &&
      data[0]?.dailyData.map(({ date, revenue }) => {
        return {
          name: date,
          revenue: revenue,
        };
      })
    );
  }, [data]);

  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0]?.dailyData.map(({ date, revenue, expenses }) => {
        return {
          name: date,
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);
  const revenueProfit = useMemo(() => {
    return (
      data &&
      data[0]?.dailyData.map(({ date, revenue, expenses }) => {
        return {
          name: date,
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        };
      })
    );
  }, [data]);

  return (
    <>
      <DashboardBox gridArea="a">
        a
        <BoxHeader
          title="Revenue and expenses"
          subtitle="top line revenue, bottom ine expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 60,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="0">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="0">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              // dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              // dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="b">
        b
        <BoxHeader
          title="Profit and revenue"
          subtitle="top line revenue, bottom line expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={revenueProfit}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 60,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />

            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            <Legend
              height={20}
              wrappperStyle={{
                margin: "0 0 10px 0",
              }}
            />
            <Line
              dot={false}
              yAxisId="left"
              type="monotone"
              dataKey="profit"
              stroke={palette.tertiary[500]}
            />
            <Line
              dot={false}
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="c">
        c
        <BoxHeader
          title="Revenue day by day"
          subtitle="graph reperesenting the revenue day by day"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="0">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertica={false} stroke={palette.grey[800]} />
            <XAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              dataKey="name"
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            {/* <Legend /> */}
            <Bar
              dataKey="revenue"
              fill={palette.primary.main}
              // fill="url(#colorRevenue)"
              // activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row1;
