const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    text: `You start to wake up. You feel as though you've been sleeping for years. So long, you can barely remember who you are.`,
    options: [
      {
        text: `Who am I?`,
        nextText: 2,
      },
      {
        text: `What was I doing before this?`,
        nextText: 3,
      },
    ],
  },
  {
    id: 2,
    text: `You search around in your mind for your name. Player. That's who you are.
    
    You foggily dig through your memories. <i>That's right,</i> you remember, <i>I decided to secretly emigrate through a private company named Wyscan.</i>

    It was very expensive, much more than you could ever afford. Where did you get the money again?`,
    options: [
      {
        text: `A loan. You haggled and signed away all of your belongings to qualify for a loan to cover the ludicrous costs.`,
        nextText: 4,
      },
      {
        text: `Someone named me a beneficiary in their will. You don't know who it was, but you inherited just enough to cover the costs.`,
        nextText: 4,
      },
      {
        text: `I won the money. Some might call it luck or coincidence, but however the means, you won money to cover the costs.`,
        nextText: 4,
      },
    ],
  },
  {
    id: 3,
    text: `You foggily dig through your memories. <i>That's right,</i> you remember, <i>I decided to secretly emigrate through a private company named Wyscan.</i>

    It was very expensive, much more than you could ever afford. Where did you get the money again?`,
    options: [
      {
        text: `A loan. You haggled and signed away all of your belongings to qualify for a loan to cover the ludicrous costs.`,
        nextText: 4,
      },
      {
        text: `Someone named me a beneficiary in their will. You don't know who it was, but you inherited just enough to cover the costs.`,
        nextText: 4,
      },
      {
        text: `I won the money. Some might call it luck or coincidence, but however the means, you won money to cover the costs.`,
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    text: `<i>But why did I want to leave so secretly?`,
    options: [
      {
        text: `placeholder`,
        nextText: 5,
      },
      {
        text: `placeholder`,
        nextText: 5,
      },
    ],
  },
  {
    id: 5,
    text: `placeholder`,
    options: [
      {
        text: `placeholder`,
        nextText: 6,
      },
      {
        text: `placeholder`,
        nextText: 6,
      },
    ],
  },
  {
    id: 6,
    text: `placeholder`,
    options: [
      {
        text: `placeholder`,
        nextText: 7,
      },
      {
        text: `placeholder`,
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    text: `placeholder`,
    options: [
      {
        text: `placeholder`,
        nextText: 8,
      },
      {
        text: `placeholder`,
        nextText: 8,
      },
    ],
  },
  {
    id: 8,
    text: `placeholder`,
    options: [
      {
        text: `placeholder`,
        nextText: 9,
      },
      {
        text: `placeholder`,
        nextText: 9,
      },
    ],
  },
  {
    id: 9,
    text: `placeholder`,
    options: [
      {
        text: `placeholder`,
        nextText: 10,
      },
      {
        text: `placeholder`,
        nextText: 10,
      },
    ],
  },
  {
    id: 10,
    text: `placeholder`,
    options: [
      {
        text: `placeholder`,
        nextText: 11,
      },
      {
        text: `placeholder`,
        nextText: 11,
      },
    ],
  },
  {
    id: 11,
    text: `placeholder`,
    options: [
      {
        text: `placeholder`,
        nextText: 12,
      },
      {
        text: `placeholder`,
        nextText: 12,
      },
    ],
  },
  {
    id: 12,
    text: `placeholder`,
    options: [
      {
        text: `placeholder`,
        nextText: 13,
      },
      {
        text: `placeholder`,
        nextText: 13,
      },
    ],
  },
  {
    id: 13,
    text: `placeholder`,
    options: [
      {
        text: `placeholder`,
        nextText: 14,
      },
      {
        text: `placeholder`,
        nextText: 14,
      },
    ],
  },
  {
    id: 14,
    text: `placeholder`,
    options: [
      {
        text: `placeholder`,
        nextText: 15,
      },
      {
        text: `placeholder`,
        nextText: 15,
      },
    ],
  },
  {
    id: 16,
    text: `placeholder`,
    options: [
      {
        text: `placeholder`,
        nextText: 1,
      },
      {
        text: `placeholder`,
        nextText: 1,
      },
    ],
  },
];

startGame();
