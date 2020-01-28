const isEmpty = data => {
  if (!data) return true;

  if (!Array.isArray(data) || data.length === 0) return true;

  return false;
};

export default isEmpty;
