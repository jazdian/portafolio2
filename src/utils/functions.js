
export function hoverExperience() {
    document.querySelectorAll('.project-card-exp').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.remove('soft-glass-ui');
            card.classList.add('tinted-glass-ui');
            card.querySelector('.project-title').classList.add('text-blue-700');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.add('soft-glass-ui');
            card.classList.remove('tinted-glass-ui');
            card.querySelector('.project-title').classList.remove('text-blue-700');
        });
    })
};