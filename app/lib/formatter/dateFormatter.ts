const dateFotmatter = Intl.DateTimeFormat("id", {
  weekday: "short",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export default dateFotmatter;
