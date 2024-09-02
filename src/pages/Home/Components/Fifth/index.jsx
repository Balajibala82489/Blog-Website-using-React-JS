import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import styles from "./styles";

function Fifth() {
  return (
    <Box style={{ ...styles.wrapper }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ ...styles.container }}>
            <Box sx={{ ...styles.center }}>
              <Grid item xs={12}>
                <Typography variant="h3" sx={{ ...styles.blogPost }}>
                  Recent Posts
                </Typography>
              </Grid>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="h5" sx={{ ...styles.blogTitle }}>
                    Daily Catholic Lectio. Thu, 1 Aug ’24. Being worthy!
                  </Typography>
                  <Typography variant="subtitle1" sx={{ ...styles.blogDate }}>
                    July 31, 2024
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ ...styles.blogDescription }}
                  >
                    Daily Catholic Lectio Thu, 1 August 2024 Seventeenth Week in
                    Ordinary Time – Thursday Jeremiah 18:1-6. Matthew 13:47-53
                    Being worthy! In the gospel reading, Jesus gives a parable
                    of the kingdom of heaven: fishing net that is thrown into
                    the sea. This parable is like the parable of wheat and
                    weeds. The fisherman is patient…
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="h5" sx={{ ...styles.blogTitle }}>
                    Daily Catholic Lectio. Thu, 1 Aug ’24. Being worthy!
                  </Typography>
                  <Typography variant="subtitle1" sx={{ ...styles.blogDate }}>
                    July 31, 2024
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ ...styles.blogDescription }}
                  >
                    Daily Catholic Lectio Thu, 1 August 2024 Seventeenth Week in
                    Ordinary Time – Thursday Jeremiah 18:1-6. Matthew 13:47-53
                    Being worthy! In the gospel reading, Jesus gives a parable
                    of the kingdom of heaven: fishing net that is thrown into
                    the sea. This parable is like the parable of wheat and
                    weeds. The fisherman is patient…
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="h5" sx={{ ...styles.blogTitle }}>
                    Daily Catholic Lectio. Thu, 1 Aug ’24. Being worthy!
                  </Typography>
                  <Typography variant="subtitle1" sx={{ ...styles.blogDate }}>
                    July 31, 2024
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ ...styles.blogDescription }}
                  >
                    Daily Catholic Lectio Thu, 1 August 2024 Seventeenth Week in
                    Ordinary Time – Thursday Jeremiah 18:1-6. Matthew 13:47-53
                    Being worthy! In the gospel reading, Jesus gives a parable
                    of the kingdom of heaven: fishing net that is thrown into
                    the sea. This parable is like the parable of wheat and
                    weeds. The fisherman is patient…
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} align="center">
                <Typography variant="h6">
                  Subscribe to get daily posts in your inbox. Type your email…
                </Typography>
                <Box
                  component="form"
                  sx={{
                    ...styles.textFieldWrap,
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-search"
                    placeholder="Type your email..."
                    type="search"
                    variant="outlined"
                    size="large"
                    sx={{
                      ...styles.textField,
                    }}
                  />
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      ...styles.subscribe,
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Fifth;
