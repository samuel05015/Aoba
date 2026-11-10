export function whatsappUrl(number: string, message = 'Olá! Conheci a clínica pelo site e gostaria de saber como agendar uma avaliação.') {
 const digits = number.replace(/\D/g,'');
 return digits ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}` : '#contato';
}