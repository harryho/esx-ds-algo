import { Utils } from "../dist/bundle";
import "mocha";
import { assert, expect } from "chai";

describe("Utils", () => {
  it("should be able to compare numbers correctly ", () => {
    assert.isTrue(Utils.compare(1, 2) < 0);
    assert.isTrue(Utils.compare(11, 2) > 0);
    assert.isTrue(Utils.compare(-11, -11) == 0);
    assert.isTrue(Utils.compare("a", "b") < 0);
    assert.isTrue(Utils.compare("a", "a") == 0);
    assert.isTrue(Utils.compare("A", "a") < 0);
    assert.isTrue(Utils.compare("@", "a") < 0);
    assert.isTrue(Utils.compare("abc", "acb") < 0);
  });

  it("should be able to compare equivalent simple primary variable correctly ", () => {
    assert.isTrue(Utils.equals(1, 2) == false);
    assert.isTrue(Utils.equals(11, 2) == false);
    assert.isTrue(Utils.equals(-11, -11) == true);
    assert.isTrue(Utils.equals("a", "b") == false);
    assert.isTrue(Utils.equals("a", "a") == true);
    assert.isTrue(Utils.equals("A", "a") == false);
    assert.isTrue(Utils.equals("@", "a") == false);
    assert.isTrue(Utils.equals("abc", "acb") == false);
  });

  it("should be able to compare equivalent date object correctly ", () => {
    assert.isTrue(Utils.equals(new Date(), new Date()) == true);

    assert.isTrue(
      Utils.equals(
        new Date("2017-06-16T21:36:48.362Z"),
        new Date("2017-06-16T21:36:48.362Z")
      ) == true
    );

    assert.isTrue(
      Utils.equals(
        new Date("2017-06-16T21:36:48.362Z"),
        new Date("2017-01-01T00:00:00.000Z")
      ) == false
    );
    assert.isTrue(
      Utils.equals(
        new Date("2017-06-16T21:36:48.362Z"),
         "2017-06-16T21:36:48.362Z"
      ) == false
    );
    assert.isTrue(
      Utils.equals(new Date("2017-06-16T21:36:48.362Z"), {}) == false
    );
  });

  it("should be able to compare equivalent array correctly ", () => {
    assert.isTrue(Utils.equals([1], [2]) == false);
    assert.isTrue(Utils.equals([11], [2]) == false);
    assert.isTrue(Utils.equals([-11], [-11]) == true);
    assert.isTrue(Utils.equals(["a"], ["b"]) == false);
    assert.isTrue(Utils.equals(["a"], ["a"]) == true);
    assert.isTrue(Utils.equals(["A"], ["a"]) == false);
    assert.isTrue(Utils.equals(["@"], ["a"]) == false);
    assert.isTrue(Utils.equals(["abc"], ["acb"]) == false);
  });

  it("should be able to compare equivalent object correctly ", () => {
    assert.isTrue(Utils.equals(
      
      {
        prop1: 'value1',
        prop2: 'value2',
        prop3: 'value3',
        prop4: {
          subProp1: 'sub value1',
          subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
          }
        },
        prop5: 1000,
        prop6: new Date(2016, 2, 10)
      }, {
        prop5: 1000,
        prop3: 'value3',
        prop1: 'value1',
        prop2: 'value2',
        prop6: new Date('2016/03/10'),
        prop4: {
          subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
          },
          subProp1: 'sub value1'
        }
      }
    
    
    ) == true);
    assert.isTrue(Utils.equals({
      prop1: 'value1',
      prop2: 'value2',
      prop3: 'value3',
      prop4: {
        subProp1: 'sub value1',
        subProp2: {
          subSubProp1: 'sub sub  value1',
          subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        }
      },
      prop5: 1000,
      prop6: new Date(2016, 2, 10)
    }, {
      prop5: 1000,
      prop3: 'value3',
      prop1: 'value1',
      prop2: 'value2',
      prop6: new Date('2016/03/10'),
      prop4: {
        subProp2: {
          subSubProp1: 'sub sub value1',
          subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
        },
        subProp1: 'sub value1'
      }
    }
  ) == false);
  
  });
});
