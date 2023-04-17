IMask(document.querySelector("#validadeCard"), {
  mask: "MM{/}YY",
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 01,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getFullYear()).slice(2),
      to: String(new Date().getFullYear() + 10).slice(2),
    },
  },
})

IMask(document.getElementById("cvv"), {
  mask: "0000",
})

IMask(document.getElementById("numCard"), {
  mask: "0000 0000 0000 0000",
})
