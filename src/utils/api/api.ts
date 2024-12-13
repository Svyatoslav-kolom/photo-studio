export const sendTelegramMessage = async (phone: string, name: string): Promise<void> => {
  const response = await fetch('https://web.nikolaevna.studio/api/send-telegram', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone, name }),
  });

  if (!response.ok) {
    throw new Error(`Ошибка отправки: ${response.statusText}`);
  }
};
