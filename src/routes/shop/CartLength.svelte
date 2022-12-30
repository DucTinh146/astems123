<script>
	import {cart} from "./cart.js";
</script>

<p>Có <strong> {$cart.length}</strong> sản phẩm trong giỏ hàng</p>
<p>Số lượng sản phẩm:
	<strong>{$cart.reduce((sum, item) => sum + item.quantity, 0)}</strong> sản phẩm
</p>