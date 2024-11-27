import PropTypes from "prop-types";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const DonutChart = ({
  data,
  innerRadius = 70,
  outerRadius = 100,
  startAngle = 90,
  endAngle = 450,
}) => {
  return (
    <div className="mx-auto mt-10 max-w-sm rounded-lg bg-gradient-to-r from-blue-50 to-white shadow-xl">
      {/* Title Section */}
      <div className="p-6 text-center">
        <h2 className="text-2xl font-extrabold text-gray-800 tracking-wide">
        আ’মলি মুহাসাবা
        </h2>
        <p className="text-sm text-gray-500 mt-1">
        সর্বমোট অগ্রগতি
        </p>
      </div>

      {/* Chart Section */}
      <div className="max-w-sm relative p-6 rounded-b-lg">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart className="p-4">
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              dataKey="value"
              startAngle={startAngle}
              endAngle={endAngle}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend align="center" verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
    </div>




  );
};

DonutChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  innerRadius: PropTypes.number,
  outerRadius: PropTypes.number,
  startAngle: PropTypes.number,
  endAngle: PropTypes.number,
};

export default DonutChart;
