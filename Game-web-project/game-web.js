const snowWindow = document.querySelector(".snow-window");
const snowflakeCount = 18;

for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement("span");
    snowflake.classList.add("snowflake");

    const size = Math.random() * 3 + 2;
    const duration = Math.random() * 4 + 6;
    const delay = -(i * 0.8);
    const baseLeft = (i / snowflakeCount) * 100;
    const offset = Math.random() * 6 - 3;
    const left = Math.max(0, Math.min(100, baseLeft + offset));
    const drift = Math.random() * 20 - 10;

    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";
    snowflake.style.left = left + "%";

    snowflake.style.setProperty("--duration", duration + "s");
    snowflake.style.setProperty("--delay", delay + "s");
    snowflake.style.setProperty("--drift", drift + "px");

    snowWindow.appendChild(snowflake);
}