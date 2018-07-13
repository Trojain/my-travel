<template>
	<div id="app">
		<!-- <keep-alive>缓存router的请求 -->
		<!-- exclude="Detail"   Detail组件不缓存 activated deactivated 不生效  -->
		<!-- <keep-alive exclude="Detail"> -->
		<keep-alive>
			<router-view/>
		</keep-alive>
	</div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
</style>
