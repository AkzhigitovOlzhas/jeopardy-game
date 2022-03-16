export const validateUserName = (userName) => {
  if (!/^[a-zа-я_]/i.test(userName)) {
    return "Имя должно начинаться с буквы или знака подчеркивания.";
  } else if (userName.length < 3 || userName.length > 10) {
    return "Имя должно содержать от 3 до 10 символов.";
  }
  return "";
};
