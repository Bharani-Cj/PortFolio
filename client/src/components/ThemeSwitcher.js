export function ThemeSwitcher({ setTheme, theme }) {
  function setCurrentTheme() {
    setTheme((cur) => !cur);
  }
  return (
    <div className="themer_changer" onClick={setCurrentTheme}>
      {theme ? (
        <i class="fa-solid fa-sun fa-spin fa-2xl" style={{ color: 'orange' }}></i>
      ) : (
        <i class="fa-solid fa-moon fa-2xl fa-spin" style={{ color: 'black' }}></i>
      )}
    </div>
  );
}
