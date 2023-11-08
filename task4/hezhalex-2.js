var Vector = function Vector(values) {
    this.values = values;
    this.add = function add(vector) {
        if (this.values.length !== vector.values.length) {
            throw new Error("Vector lengths are not compatible for addition");
        }

        const result = this.values.map((value, index) => value + vector.values[index]);
        return new Vector(result);
    }

    this.subtract = function(vector) {
        if (this.values.length !== vector.values.length) {
            throw new Error("Vector lengths are not compatible for subtraction");
        }

        const result = this.values.map((value, index) => value - vector.values[index]);
        return new Vector(result);
    }

    this.dot = function(vector) {
        if (this.values.length !== vector.values.length) {
            throw new Error("Vector lengths are not compatible for dot product");
        }

        const result = this.values.reduce((acc, value, index) => acc + value * vector.values[index], 0);
        return new Vector(result);
    }

    this.norm =function() {
        return  Math.sqrt(this.values.reduce((acc, value) => acc + value * value, 0));
        //return result;
    }

    this.equals = function(vector) {
        if (this.values.length !== vector.values.length || this.values.toString() !== vector.values.toString()) {
            return false;
        } else {
            return true;
        }
    }
    this.toString = function() {
        return `(${this.values.join(',')})`;
    }


}

// Example usage:
const a = new Vector([1, 2, 3]);
const b = new Vector([4, 5, 6]);
const c = new Vector([4, 5, 6]);
console.log(a.add(b).equals(c));
console.log(a.subtract(b));
console.log(a.dot(b));
console.log(a.norm(b));
console.log(c.equals(b));