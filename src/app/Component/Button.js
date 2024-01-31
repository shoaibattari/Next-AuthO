import React from "react";

function Button({ text }) {
  return (
    <div>
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full">
        {text}
      </button>
    </div>
  );
}

export default Button;
