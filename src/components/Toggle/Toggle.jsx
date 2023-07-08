import SCToggle from "./Toggle.styled.jsx";

export default function Toggle({ icons, choice, options, toggle }) {
  const firstChecked = choice === options[0];

  function handle_check(event) {
    if (event.target.value === choice) return;

    toggle(event.target.value);
  }

  return (
    <SCToggle className="toggle">
      <input
        type="radio"
        checked={firstChecked}
        value={options[0]}
        onChange={handle_check}
      />
      <input
        type="radio"
        checked={!firstChecked}
        value={options[1]}
        onChange={handle_check}
      />
      <span className="ball">{firstChecked ? icons[0] : icons[1]}</span>
    </SCToggle>
  );
}
