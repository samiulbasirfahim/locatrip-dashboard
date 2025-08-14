export const getDateObj = () => {
  const today = new Date();

  return {
    dayName: today.toLocaleDateString("en-US", { weekday: "long" }),
    date: today.getDate(),
    month: today.toLocaleDateString("en-US", { month: "long" }),
    year: today.getFullYear(),
  };
};
