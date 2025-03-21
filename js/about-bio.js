document.addEventListener("DOMContentLoaded", function () {
    const bioText = [
        { label: "Name", text: "Stevie Innocent" },
        { label: "Alias", text: "Her Ladyship" },
        { label: "Profession", text: "Student, Game Developer, Coder, Writer, Fashion Designer, Musician..." },

        { divider: true },

        { label: "Fave Games", text: "Classic Tomb Raiders. Long-form RPGs. Turn-based strategy sims." },
        { label: "Skills", text: "A big mouth and the talent to back it up." },
        { label: "Motto", text: "Before you criticise someone, walk a mile in their shoes. That way, you'll be a mile away from them, and you'll have their shoes." },

        { divider: true },

        { label: "Motivations", text: "Breaking things, fixing them, and making them better. The best ideas come from experimentation and chaos." },
        { label: "Goals", text: "To make something so good, someone writes a 'How did they even do this?' article about it." }
    ];

    const container = document.getElementById("bio-container");

    function typeEffect(element, text, delay = 50) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, delay);
            }
        }
        type();
    }

    let delayTime = 500;
    
    bioText.forEach(entry => {
        if (entry.divider) {
            const p = document.createElement("p");
            p.classList.add("bio-divider");
            p.innerHTML = "-----------------------------------";
            container.appendChild(p);
        } else {
            const p = document.createElement("p");
            p.innerHTML = `<span class="prompt">> ${entry.label}:</span> <span class="typing"></span>`;
            container.appendChild(p);

            const typingElement = p.querySelector(".typing");
            setTimeout(() => typeEffect(typingElement, entry.text), delayTime);
            delayTime += entry.text.length * 50 + 500;
        }
    });
});
