import { IDateVO, DateVO } from "./Date.vo";

describe("DateVO", () => {
  it("should format the date using Intl.DateTimeFormat", () => {
    const data: IDateVO = { value: 1612501122000 };
    const dateVO = new DateVO(data);

    expect(dateVO.value).toEqual(data.value);
    expect(dateVO.date).toEqual(new Date(data.value));
  });

  it("should validate the date", () => {
    const data: IDateVO = { value: 1612501122000 };
    const dateVO = new DateVO(data);

    expect(dateVO.validate()).toBe(true);
  });
});
