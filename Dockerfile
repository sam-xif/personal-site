FROM local/gatsby:onbuild as build

FROM local/gatsby
COPY --from=build /app/public /pub
