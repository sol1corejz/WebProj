from database import add_user, add_message, get_messages


add_user('Vadim', 'test@mail.com', '12345')
add_user('Ilya', 'test1@mail.com', '12345')
add_user('Sasha', 'test2@mail.com', '12345')

add_message(1, 2, 'Илья ты плохой мальчик')
add_message(1, 3, 'Саша ты хороший мальчик')

add_message(2, 1, 'Вадим ты плохой мальчик')
add_message(2, 3, 'Саша ты плохой мальчик')

add_message(3, 1, 'Вадим ты хороший мальчик')
add_message(3, 2, 'Илья ты плохой мальчик')
