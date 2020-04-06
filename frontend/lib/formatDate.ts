const formatDate = (date: string, withYear: boolean = false) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "long" });
  const day = dateObj.getDate() + 1;
  const year = dateObj.getFullYear();
  if (withYear) {
    return `${month} ${day}, ${year}`;
  } else {
    return `${month} ${day}`;
  }
};

export default formatDate;
